require 'socket'

cattoslist = ["https://i.imgur.com/BEjAPLj.jpeg", "https://i.imgur.com/pLXZxab.jpeg", "https://i.imgur.com/5XIjVFj.jpeg", "https://i.imgur.com/J0UJ635.jpeg", "https://i.imgur.com/2nYZYRj.jpeg"]
app = Proc.new do
  ['200', {'Content-Type' => 'application/json'}, ["{catto: '"+cattoslist[rand(1..4)]+"'}"]]
end
 
server = TCPServer.new('localhost',5678)
 
while session = server.accept
  request = session.gets
#   puts request
 
  status, headers, body = app.call({})
 
  session.print "HTTP/1.1 #{status}\r\n"
 
  headers.each do |key, value|
    session.print "#{key}: #{value}\r\n"
  end
 
  session.print "\r\n"
 
  body.each do |part|
    session.print part
  end
  session.close
end