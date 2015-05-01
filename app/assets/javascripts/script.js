
var Utils = {
	parseNumberFromText: function(_string) {
		_string = _string.replace(/[^\d\.]/g, '');
		// return 0 if no numbers exist
		if (!_string) return 0;
		_number = parseFloat(_string, 10);
		return _number
	},
	formatNumberToTwoDecimalPlaces: function(_number) {
		return parseFloat(Math.round(_number * 100) / 100).toFixed(2);
	},
	roundDownNumber: function(_number) {
		return Math.floor(_number);
	},
	addCommaSeperatorsToNumber: function(_number) {
		// solution from: http://goo.gl/8xZOQK
		return _number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	},
	// Debounce is part of Underscore.js 1.5.2 http://underscorejs.org
	// (c) 2009-2013 Jeremy Ashkenas. Distributed under the MIT license.
	debounce: function(func, wait, immediate) {
		// Returns a function, that, as long as it continues to be invoked,
		// will not be triggered. The function will be called after it stops
		// being called for N milliseconds. If `immediate` is passed,
		// trigger the function on the leading edge, instead of the trailing.
		var result;
		var timeout = null;
		return function() {
			var context = this,
				args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) result = func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) result = func.apply(context, args);
			return result;
		};
	},
	calculateMonthlyPayments: function(loan_amount, interest, years) {
		/*
			To calculate the reduced rate monthly payment, the formula is:
			i = interest / 12;
			P = loan amount;
			n = 12 * years;

			Payment = (P) * i * (1+i)^n / [(1+i)^n - 1]

			For a flat rate:
			Payment = P*i + P/n
		*/
		return (loan_amount * ((interest / 100) / 12)) + (loan_amount / (12 * years));
	},
	forceCSVInputOnField: function(input_field) {
		var update_input = function() {
			var input_value = input_field.val();

			input_value_int = input_value.replace(/\D/g, '');
			if (!input_value_int) return;
			input_value_int = parseFloat(input_value_int, 10);

			input_value_csv	= Utils.addCommaSeperatorsToNumber(input_value_int);
			input_field.val(input_value_csv);
		};

		update_input(input_field);
		input_field.on('keyup', function() {
			update_input(input_field);
		});

	}
};

var ProductsTable = {
	init: function() {
		this.el = {
			productsTable: $('.product-table'),
			tableDataRows: $('.product-table tbody tr')
		};
		this.events()
	},
	events: function() {
		var that = this;
		this.el.tableDataRows.click(function() {
			var details_page_link = $(this).find('td:first-child a').attr('href');
			window.location.href = details_page_link;
		});
	},
};

var TableMonthlyPaymentsCalculator = {
	init: function() {
		this.el = {
			loanAmountField: $('#payments-calculator .loan-amount-field'),
			tableDataRows: $('.product-table tbody tr'),
			monthlyPaymentsCells: $('.monthly-payments')
		};
		this.events();
	},
	updateMonthlyPayments: function(loan_amount) {
		if (!loan_amount) {
			this.el.monthlyPaymentsCells.fadeOut();
			return;
		}
		this.el.tableDataRows.each(function() {
			var N = Utils.parseNumberFromText;
			var minimum_salary = N($(this).attr('data-minimum-salary'));
			var period = N($(this).attr('data-max-repayment-period'));
			var flat_rate = N($(this).attr('data-flat-rate'));

			var monthly_payments = Utils.calculateMonthlyPayments(loan_amount, flat_rate, period);
			monthly_payments = Utils.roundDownNumber(monthly_payments);
			monthly_payments = Utils.addCommaSeperatorsToNumber(monthly_payments);
			monthly_payments = monthly_payments + ' AED';
			$(this).find('.monthly-payments').text(monthly_payments);
		});
		this.el.monthlyPaymentsCells.fadeIn();
	},
	events: function() {
		var that = this;
		var update_results = Utils.debounce(
			TableFilters.showReseultsUpdatedIndicator, 1000);

		this.el.loanAmountField.keyup(function() {
			var loan_amount = Utils.parseNumberFromText(that.el.loanAmountField.val());
			that.updateMonthlyPayments(loan_amount);
			update_results();
		});
	}
};

var TableFilters = {
	init: function() {
		this.el = {
			filters: $('[name]'),
			tableDataRows: $('.product-table tbody tr'),
			resultsCountHolder: $('.results-count-holder'),
			noResultsFound: $('.no-results-found'),
			resultsUpdatedIndicator: $('.results-updated-indicator'),
			resetFilters: $('.reset-filters')
		}
		this.updateResultsCount();
		this.events();
	},
	showAllRows: function() {
		this.el.tableDataRows.show();
	},
	getResultsCount: function() {
		return this.el.tableDataRows.filter(':visible').length
	},
	updateResultsCount: function() {
		var count = this.getResultsCount();

		this.el.resultsCountHolder.text(count);

		if (this.getResultsCount() === 0) {
			this.el.noResultsFound.show();	
		} else {
			this.el.noResultsFound.hide();
		}
	},
	filterRowsByEquality: function(filter_name, filter_value) {
		var filter_rows_by_value_selector = '[' + filter_name + '=' + filter_value + ']';
		if (filter_value) {
			// hide all the rows that don't match the filter criteria
			this.el.tableDataRows.not(filter_rows_by_value_selector).hide();
		}
	},
	updateResultsForFilter: function(filter_el) {
		var filter_name = filter_el.attr('name'),
			filter_value = filter_el.val();
			
		// Use True or False as the filter value if this
		// filter is a boolean filter (checkbox)
		if (filter_el.is(':checkbox')) {
			filter_value = filter_el.is(':checked') ? 'true' : '';
		}

		if (filter_name === 'creditlimit') {
			var N = Utils.parseNumberFromText;
			// get only the digits in the salary. So the salary can
			// be entered as 10,000 AED and it will still work
			var salary_entered = N(filter_value);
			
			this.el.tableDataRows.each(function() {
				var mortgage = $(this);
				var mortgage_minimum_salary = N(mortgage.attr('creditlimit'));

				if (salary_entered !== 0 && salary_entered > mortgage_minimum_salary) {
					mortgage.hide();
				}
			});
			return true;
		}

		// Filter by equality
		this.filterRowsByEquality(filter_name, filter_value);
	},
	showReseultsUpdatedIndicator: function() {
		var that = TableFilters;
		that.el.resultsUpdatedIndicator.fadeIn('fast', function() {
			var el = $(this);
			setTimeout(function() {
				el.fadeOut('slow');
			}, 500);
		});
	},
	filterResults: function() {
		var that = this;
		this.showAllRows();

		// for each filter
		this.el.filters.each(function() {
			var filter_el = $(this);
			that.updateResultsForFilter(filter_el);
		});

		this.updateResultsCount();
	},
	resetFilters: function() {
		this.el.filters
			.filter('input:text, input:password, input:file, select, textarea')
			.val('');
		this.el.filters
			.filter('input:radio, input:checkbox')
			.removeAttr('checked')
			.removeAttr('selected');

		this.filterResults();
		this.showReseultsUpdatedIndicator();
	},
	events: function() {
		var that = this;
		var updateResultsIndicator = Utils.debounce(
			that.showReseultsUpdatedIndicator, 1000);

		this.el.filters.change(function() {
			that.filterResults();
			that.showReseultsUpdatedIndicator();
		});

		this.el.filters.filter('input').on('keyup', function() {
			that.filterResults();
			updateResultsIndicator();
		});

		this.el.resetFilters.click(function() {
			that.resetFilters();
		});

		$('input').each(function() {
			Utils.forceCSVInputOnField($(this));
		});
	}
};

var ProductsPage = {
	init: function() {
		var that = this;
		 

		jQuery(document).on('page:load', function() {
			if ($('body#products-page').length) {
				that.runDependencies();
			}
		});
		jQuery(document).ready( function() {
			if ($('body#products-page').length) {
				that.runDependencies();
			}
		});

	},
	runDependencies: function() {
		ProductsTable.init();
		TableMonthlyPaymentsCalculator.init();
		TableFilters.init();
	}
}; ProductsPage.init();

var ProductDetailPage = {
	init: function() {
		var that = this;
		jQuery(document).on('page:load', function() {
			if ($('body#product-detail-page').length) {
				ProductDetailPage.setup();
			}
		});


		jQuery(document).ready( function() {
			if ($('body#product-detail-page').length) {
				ProductDetailPage.setup();
			}
		});

	},
	setup: function() {
		this.el = {
			loanAmountField: $('.loan-amount-field'),
			monthlyPaymentsWrap: $('.monthly-payments'),
			monthlyPaymentsHolder: $('.monthly-payments-holder')
		}
		this.events();
	},
	events: function() {
		var that = this;
		this.el.loanAmountField.keyup(function() {
			var loan_amount = Utils.parseNumberFromText($(this).val());
			var interest = PRODUCT_DETAILS.flat_rate;
			var years = PRODUCT_DETAILS.max_repayment_period;
			var monthly_payments = Utils.calculateMonthlyPayments(loan_amount, interest, years);
			monthly_payments = Utils.roundDownNumber(monthly_payments);
			monthly_payments = Utils.addCommaSeperatorsToNumber(monthly_payments);
			that.el.monthlyPaymentsHolder.text(monthly_payments);
			if (Utils.parseNumberFromText(monthly_payments)) {
				that.el.monthlyPaymentsWrap.fadeIn();
			} else {
				that.el.monthlyPaymentsWrap.fadeOut('fast');
			}
		});

		Utils.forceCSVInputOnField(this.el.loanAmountField);
	}
}; ProductDetailPage.init();

var BankContactForm = {
	init: function() {
		var that = this;
		$(function() {
			that.setup();
		});
	},
	setup: function() {
		this.el = {
			form: $('.bank-contact-form'),
			send_button: $('.bank-contact-form input[type=submit]'),
			subscribe_3rd_party_wrap: $('#id_subscribe_third_party_emails').parent(),
			debt_fields: {
				credit_card: $('#id_credit_card_debt'),
				auto_loan: $('#id_auto_loan_debt'),
				home_loan: $('#id_home_loan_debt'),
				personal_loan: $('#id_personal_loan_debt')
			},
			monthly_income: $('#id_monthly_income'),
			other_income: $('#id_other_income'),
			uneligibleForLoan: $('.uneligible-for-loan'),
			calculatedAmountHiddenField: $('#id_calculated_loan_amount'),
			employment_years: $('#id_employment_years')
		};

		this.el.all_debt_fields = 
			this.el.debt_fields.credit_card
			.add(this.el.debt_fields.auto_loan)
			.add(this.el.debt_fields.home_loan)
			.add(this.el.debt_fields.personal_loan);

		this.el.all_debt_fields_wraps = 
			this.el.debt_fields.credit_card.parent()
			.add(this.el.debt_fields.auto_loan.parent())
			.add(this.el.debt_fields.home_loan.parent())
			.add(this.el.debt_fields.personal_loan.parent());

		if (!this.el.form.length) return;
		this.events();
	},
	date_fields_modifier: function() {
		$('#id_dob_day').parent().addClass('split_third');
		$('#id_dob_month').parent().addClass('split_third');
		$('#id_dob_year').parent().addClass('split_third last');
	},
	split_form_into_sections: function() {
		$('label[for=id_first_name]').parent().before('<h3>Personal Details</h3>');
		$('label[for=id_job_title]').parent().before('<h3>Job Details</h3>');
		$('label[for=id_monthly_income]').parent().before('<h3>Income Details</h3>');
		$('label[for=id_credit_card_debt]').parent().before('<h3>Existing Debt Details</h3>');
	},
	hide_other_debt_fields: function() {
		var that = this;

		var abort_hide;
		this.el.all_debt_fields.each(function() {
			if ($(this).val() !== '') {
				abort_hide = true;
				return false;
			}
		});
		if (abort_hide) return;

		// hide all other debt fields.
		this.el.all_debt_fields_wraps.hide();

		// Insert a trigger to show the hidden fields. Attach click event to this
		// trigger which shows these fields.
		this.el.debt_fields.personal_loan.parent().after(
			'<div class="expand-other-income">Add existing debt (recommended)</div>');
		this.el.expand_other_income_trigger = $('.expand-other-income');
		this.el.expand_other_income_trigger.click(function() {
			that.el.all_debt_fields_wraps.fadeIn();
			$(this).remove();
		})
	},
	compute_max_loan_amount: function(income, cc, al, pl, hl, rate, max_time) {
		var emi = (income / 2) - (0.05 * cc) - al - pl - hl;
		if (emi <= 0) {
			return 0;
		}
		rate = rate / 100;
		var interest = Math.pow((1 + rate), max_time);
		var max = (emi * (interest - 1)) / (rate * interest);
		return Math.round(max);
	},
	update_max_loan_amount: function(income_plus_debt_fields) {
		var that = this;
		var n = Utils.parseNumberFromText;
		var monthly_income = n(that.el.monthly_income.val());
		var other_income = n(that.el.other_income.val());

		var rate = PRODUCT_DETAILS.flat_rate;
		var max_time = PRODUCT_DETAILS.max_repayment_period;

		var max_loan_amount = that.compute_max_loan_amount(
				monthly_income + other_income,
				n(that.el.debt_fields.credit_card.val()),
				n(that.el.debt_fields.auto_loan.val()),
				n(that.el.debt_fields.personal_loan.val()),
				n(that.el.debt_fields.home_loan.val()),
				rate / 12, // rate per month
				max_time * 12 // years -> months
			);

		that.el.max_loan_calc_amount.text(
			Utils.addCommaSeperatorsToNumber(max_loan_amount) + ' AED');
		this.el.calculatedAmountHiddenField.val(max_loan_amount);

		if (max_loan_amount == 0 && monthly_income !== 0) {
			this.el.uneligibleForLoan.show();
			this.disable_send_button();
		} else {
			this.el.uneligibleForLoan.hide();
			this.enable_send_button();
		}
	},
	disable_send_button: function() {
		this.el.send_button.addClass('disabled').attr('disabled', 'disabled');
	},
	enable_send_button: function() {
		this.el.send_button.removeClass('disabled').removeAttr('disabled');
	},
	maximum_loan_amount_calculator: function() {
		var that = this;
		this.el.subscribe_3rd_party_wrap.before(
			'<div class="maximum-loan-amount-calculator">Maximum amount you could borrow <span class="amount-holder">--</span></div>');
		this.el.max_loan_calc_wrap = $('.maximum-loan-amount-calculator');
		this.el.max_loan_calc_amount = $('.maximum-loan-amount-calculator .amount-holder');

		var income_plus_debt_fields = this.el.all_debt_fields.add(this.el.monthly_income
			).add(this.el.other_income);

		// update on load		
		that.update_max_loan_amount(income_plus_debt_fields);

		// update on data change
		income_plus_debt_fields.on('keyup', function() {
			that.update_max_loan_amount(income_plus_debt_fields);
		});
	},
	convert_number_fields_into_text: function() {
		try {
			$('input[type=number]').each(function() {
				$(this).get(0).type = 'text';
			});
		} catch (e) {}
	},
	events: function() {
		this.date_fields_modifier();
		this.split_form_into_sections();
		this.convert_number_fields_into_text();
		this.hide_other_debt_fields();
		this.maximum_loan_amount_calculator();

		// hide this field on load
		this.el.calculatedAmountHiddenField.parent().hide();

		var csv_input_fields = this.el.all_debt_fields
			.add(this.el.monthly_income)
			.add(this.el.other_income)
			.add(this.el.employment_years);
		
		csv_input_fields.each(function() {
			Utils.forceCSVInputOnField($(this));
		});

		this.el.form.submit(function() {
			csv_input_fields.each(function() {
				var user_input = $(this).val();
				var user_input_int = Utils.parseNumberFromText($(this).val());
				$(this).val(user_input_int);
			});
		});
	}
}; BankContactForm.init();


var LeadsDashboard = {
	init: function() {
		if ($('#leads-dashboard').length) {
			this.events();
		}
	},
	events: function() {
		var date_options = {
		    format: 'yyyy-mm-dd',
		};
		var time_options = {
		    // 24 hour time
		    format: 'HH:i'
		};

		$('#id_from_date_0').attr('placeholder', 'YYYY-MM-DD').pickadate(date_options);
		$('#id_from_date_1').attr('placeholder', 'HH:MM').pickatime(time_options);
		$('#id_to_date_0').attr('placeholder', 'YYYY-MM-DD').pickadate(date_options);
		$('#id_to_date_1').attr('placeholder', 'HH:MM').pickatime(time_options);

	}
};  $(function() { LeadsDashboard.init(); });
