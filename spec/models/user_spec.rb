require 'rails_helper'

RSpec.describe User, type: :model do
  it {should have_valid(:username).when("Brian5")}
  it {should_not have_valid(:username).when(nil, "")}

  it { should have_valid(:email).when("an@email.com")}
  it { should_not have_valid(:email).when(nil, "", "notagoodemail")}

  it {should have_valid(:password).when("password")}
  it {should_not have_valid(:password).when(nil, "")}
end
