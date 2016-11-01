class HelloWorldController < ApplicationController
  @@count = { "apples" => 0, "oranges" => 0 }
  STATS_CHANNEL = "stats"

  def index
    # This is where we set the current user. It's just a dummy to identify the 
    # action_cable by. See ApplicationCable#connect for more
    username = params["username"] ||= "dummy"
    @hello_world_props = { name: "Stranger", stats: @@count }
    cookies.signed[:current_user] = username
  end

  def current_user
    cookies.signed[:current_user] ||= "dummy"
  end

  def incr
    stat = params[:stat] || "dummy"
    @@count[stat] += 1
    ActionCable.server.broadcast STATS_CHANNEL, @@count
    render text: @@count[stat].to_s
  end

  def decr
    stat = params[:stat] || "dummy"
    @@count[stat] -= 1
    ActionCable.server.broadcast STATS_CHANNEL, @@count
    render text: @@count[stat].to_s
  end
end
