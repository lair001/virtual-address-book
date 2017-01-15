FactoryGirl.define do
  factory :user do
    username "MyString"
    email "MyString"
    password_digest "MyString"
    security_code "MyString"
    role 1
  end
end
