class StatsChannel < ApplicationCable::Channel
  def subscribed
    puts ">>> Subscribed to stats"
    stream_from "stats"
  end
end
