class ApplicationController < ActionController::Base

	include Pundit

	rescue_from(Pundit::NotAuthorizedError) { render json: {}, status: 403, serializer: UnauthorizedAccessOrActionSerializer }
	rescue_from(ActiveRecord::RecordNotFound) { render json: {}, status: 404, serializer: RecordNotFoundSerializer }
	protect_from_forgery with: :exception

protected

	include ApplicationHelper

end
