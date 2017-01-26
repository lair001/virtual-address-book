FactoryGirl.define do
    factory :contact do

        last_name { fake_last_name }
        first_name { fake_first_name }
        occupation { fake_occupation }
        employer { fake_employer }
        email { fake_email }
        phone { fake_phone }
        address_line_1 { fake_address_line_1 }
        address_line_2 { fake_address_line_2 }
        city { fake_city }
        state { fake_state }
        zip_code { fake_zip_code }

        association :user
    end
end
