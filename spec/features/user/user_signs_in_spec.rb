require 'spec_helper'

feature 'user signs in;
  As a user
  I want to sign in
  So that I can view the dashboard' do

  scenario 'a non-signed-in user sees sign in page as a home page' do
    visit root_path
    expect(page).to have_content "Please sign in before continuing"
    expect(page).to have_button "Sign in"
  end

  scenario 'an existing user specifies a valid email and password' do
    User.create(username: 'brian', email: 'briansemail@gmail.com', password: 'password')

    visit new_user_session_path

    fill_in 'Email', with: "briansemail@gmail.com"
    fill_in 'Password', with: "password"
    click_button 'Sign in'

    expect(page).to_not have_button "Sign In"
  end

  scenario 'a nonexistant username and password is supplied' do
    visit new_user_session_path

    fill_in 'Email', with: "bobsemail@gmaill.com"
    fill_in 'Password', with: "notapassword"
    click_button 'Sign in'

    expect(page).to have_content "Invalid Email or Password"
    expect(page).to_not have_button "Sign Out"
  end

  scenario 'an existing username with the wrong password is supplied and denied' do
    User.create(username: 'brian', email: 'briansemail@gmail.com', password: 'password')
    visit new_user_session_path

    fill_in 'Email', with: "briansemail@gmail.com"
    fill_in 'Password', with: "notapassword"
    click_button 'Sign in'

    expect(page).to have_content "Invalid Email or Password"
    expect(page).to_not have_button "Sign Out"
  end

end
