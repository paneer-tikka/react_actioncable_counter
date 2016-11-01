module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      # We use the username set in the cookie if any
      # otherwise just a dummy user will suffice for our example.
      username = cookies.signed[:current_user] || "dummy"
      self.current_user = username
    end
  end
end
