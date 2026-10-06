#!/usr/bin/env perl
use strict;
use warnings;

print "Perl Fallback Script Engine Active.\n";
my $file = shift @ARGV || "Info.plist";
print "Analyzing package payload details for: $file...\n";
