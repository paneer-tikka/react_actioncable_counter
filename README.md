# README

This is a sample app that uses [react_on_rails](https://github.com/shakacode/react_on_rails) to create a simple real-time counter.
The react component subscribes to messages brodcast on an [ActionCable](http://edgeguides.rubyonrails.org/action_cable_overview.html) channel and updates the count on screen in real-time.

* Rails version
5

* Ruby version
2.3.1

* Background reading:
 * [React on rails](https://github.com/shakacode/react_on_rails/#getting-started)
 * [ActionCable](http://edgeguides.rubyonrails.org/action_cable_overview.html)

* To run:
 * foreman start -f Procfile.dev
 * Open localhost:3000/hello_world in multiple browser windows.
 * On a shell promp, run:
   curl localhost:3000/incr?stat=oranges
   or
   curl localhost:3000/incr?stat=apples
   or
   curl localhost:3000/decr?stat=oranges
   or
   curl localhost:3000/decr?stat=apples
 * Watch the count of apples and oranges change.

* Code Changes:
Just check [the relevant commit](https://github.com/paneer-tikka/react_actioncable_counter/commit/299155b7277bab5dce1c6405f8ca45b78f5176c7)

## Note:
This is just a sample of how you can connect a actioncable broadcast to a react_on_rails component. This is not production ready. Especially note that the actioncable does not use any kind of authentication.
