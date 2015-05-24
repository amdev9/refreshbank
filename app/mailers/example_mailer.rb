

class ExampleMailer < ActionMailer::Base
  # def sample_email(subscriber)
  #     @subscriber = subscriber
  #     mail(from:ENV['gmail_username'] ,to: @subscriber.email, subject: 'Sample Email')
  #   end

  def sample_email(subscriber)
    @subscriber = subscriber
    p @subscriber.email
    mg_client = Mailgun::Client.new ENV['api_key']
 	#p ENV['api_key']
  html_output = render_to_string template: "example_mailer/sample_email"
    message_params = {:from    => "refreshbank.info@gmail.com" ,#ENV['gmail_username'],
                      :to      => @subscriber.email,
                      :subject => "Уведомление от RefreshBank",
                      :html => html_output.to_str }
            
    #p ENV['domain']
    mg_client.send_message ENV['domain'], message_params
  end
end
