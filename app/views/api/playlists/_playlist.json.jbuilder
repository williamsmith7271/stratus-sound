json.id playlist.id
json.title playlist.title
json.user_id playlist.user.id
json.username playlist.user.username
json.tracks playlist.tracks do |track|
  json.partial! 'api/tracks/track', track: track
end
