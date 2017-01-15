module ConcernsHelper
	module Sessions

		def current_user
			@current_user ||= User.find_by(id: session[:user_id], security_code: session[:security_code])
		end

		def user_signed_in?
			!!current_user
		end

	end
end