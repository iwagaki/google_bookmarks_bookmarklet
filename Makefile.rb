#!/usr/bin/ruby -Ku

SRC = 'google_bookmarks_bookmarklet.js'

#source_file = File.open(ARGV[0])
source_file = File.open(SRC)
source_body = source_file.read

puts source_body.gsub(/\n/, "").gsub(/\s+/, " ")

source_file.close
