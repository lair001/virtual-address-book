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

		def fake_unique_email
			return unique_value(-> { Faker::Internet.safe_email }, User, :email )
		end

		def fake_phone
			"(#{rand(9)+1}#{rand(10)}#{rand(10)})#{rand(10)}#{rand(10)}#{rand(10)}-#{rand(10)}#{rand(10)}#{rand(10)}#{rand(10)}"
		end

		def fake_address_line_1
			Faker::Address.street_address
		end

		def fake_address_line_2
			Faker::Address.secondary_address
		end

		def fake_city
			Faker::Address.city
		end

		def fake_state
			Faker::Address.state_abbr
		end

		def fake_zip_code
			Faker::Address.zip_code
		end

		def fake_email
			Faker::Internet.safe_email
		end

		def fake_domain
			Faker::Internet.domain_name
		end

		def fake_occupation
			Faker::Company.profession
		end

		def fake_employer
			Faker::Company.name
		end

		def fake_last_name
			Faker::Name.last_name
		end

		def fake_first_name
			Faker::Name.first_name
		end

		def unique_value(value_generator_lambda, model_class, model_attribute)
			while true
				value = value_generator_lambda.()
				return value unless model_class.exists?(model_attribute => value)
			end
		end

	end
end
