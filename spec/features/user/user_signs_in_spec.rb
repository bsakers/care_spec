require 'spec_helper'

feature 'user signs in;
  As a user
  I want to sign in
  So that I can view the dashboard' do

  # scenario 'a non-signed-in user sees sign in page as a home page' do
  #   visit root_path
  #   expect(page).to have_content "Log In"
  # end

  scenario 'an existing user specifies a valid email and password' do
    User.create(username: 'brian', email: 'briansemail@gmail.com', password: 'password')

    visit new_user_session_path

    fill_in 'Email', with: "briansemail@gmail.com"
    fill_in 'Password', with: "password"
    click_button 'Log in'

    expect(page).to have_content "Signed in successfully."
    # expect(page).to have_content "Sign Out"
    # expect(page).to_not have_content "Sign In"
  end

  scenario 'a nonexistant username and password is supplied' do
    visit new_user_session_path

    fill_in 'Email', with: "bobsemail@gmaill.com"
    fill_in 'Password', with: "notapassword"
    click_button 'Log in'

    expect(page).to have_content "Invalid Email or password."
    # expect(page).to_not have_content "Sign Out"
  end

  scenario 'an existing username with the wrong password is supplied and denied' do
    User.create(username: 'brian', email: 'briansemail@gmail.com', password: 'password')
    visit new_user_session_path

    fill_in 'Email', with: "briansemail@gmail.com"
    fill_in 'Password', with: "notapassword"
    click_button 'Log in'

    expect(page).to have_content "Invalid Email or password."
    # expect(page).to_not have_content "Sign Out"
  end

end
