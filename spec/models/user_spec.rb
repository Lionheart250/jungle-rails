# spec/models/user_spec.rb
require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'Validations' do
    # validation examples here
  end

  describe '.authenticate_with_credentials' do
    before do
      @user = User.create(
        email: 'test@example.com',
        password: 'password',
        password_confirmation: 'password',
        first_name: 'John',
        last_name: 'Doe'
      )
    end

    it 'should authenticate with correct credentials' do
      authenticated_user = User.authenticate_with_credentials('test@example.com', 'password')
      expect(authenticated_user).to eq(@user)
    end

    it 'should not authenticate with incorrect password' do
      authenticated_user = User.authenticate_with_credentials('test@example.com', 'wrong_password')
      expect(authenticated_user).to be_nil
    end

    it 'should authenticate with leading/trailing spaces in email' do
      authenticated_user = User.authenticate_with_credentials('  test@example.com  ', 'password')
      expect(authenticated_user).to eq(@user)
    end

    it 'should authenticate with case-insensitive email' do
      authenticated_user = User.authenticate_with_credentials('TEST@EXAMPLE.com', 'password')
      expect(authenticated_user).to eq(@user)
    end

    it 'should not authenticate with non-existing email' do
      authenticated_user = User.authenticate_with_credentials('nonexistent@example.com', 'password')
      expect(authenticated_user).to be_nil
    end
  end
end
