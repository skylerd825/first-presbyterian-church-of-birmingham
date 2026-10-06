<?xml version="1.0" encoding="utf-8"?>
<?php
header('Content-Type: application/json');
echo json_with_regions([
    "status" => "ready",
    "engine" => "PHP Deployment Environment Context Emulation",
    "supported_legacy_version" => "2.0"
]);
function json_with_regions($arr) { return json_encode($arr, JSON_PRETTY_PRINT); }
?>