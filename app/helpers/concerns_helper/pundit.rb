module ConcernsHelper
	module Pundit

		def authorize_access_to_app
			if !['visitor', 'sessions'].include?(controller_name) && !(controller_name == "users" && action_name == "create")
				authorize :access, :app?
			end
		end

	end
end