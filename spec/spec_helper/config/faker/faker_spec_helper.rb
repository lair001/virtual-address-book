module FakerSpecHelper
	module Generators

		def fake_username
			return unique_value(-> { Faker::Internet.user_name }, User, :username )
		end

		def fake_two_paragraphs
			fake_n_paragraphs(2)
		end

		def fake_n_paragraphs(n)
			Faker::Lorem.paragraphs(n).join("\n\n")
		end

		def fake_up_to_ten_paragraphs
			fake_n_paragraphs(rand(1..10))
		end

		def fake_password
			Faker::Internet.password(Devise.password_length.min, Devise.password_length.max)
		end

		def fake_email
			return unique_value(-> { Faker::Internet.safe_email }, User, :email )
		end

		def fake_domain
			Faker::Internet.domain_name
		end

		def unique_value(value_generator_lambda, model_class, model_attribute)
			while true
				value = value_generator_lambda.()
				return value unless model_class.exists?(model_attribute => value)
			end
		end

	end
end
