class ApplicationController < ActionController::Base

	include Pundit

	rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
	rescue_from(ActiveRecord::RecordNotFound) { render json: {}, status: 404, serializer: RecordNotFoundSerializer }
	protect_from_forgery with: :exception

end
