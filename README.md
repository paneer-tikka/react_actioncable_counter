# README

This is a sample app that uses react_on_rails to create a simple counter react component.
The react component subscribes to messages brodcast on an actioncable channel and updates the count on screen in real-time.

* Rails version
5

* Ruby version
2.3.1

* Background reading:
 * [React on rails|https://github.com/shakacode/react_on_rails/#getting-started]
 * [ActionCable|http://edgeguides.rubyonrails.org/action_cable_overview.html]

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

* Exactly what changes did I make after generating the vanilla hello_world app?
  Simply check the diff from the last commit.
