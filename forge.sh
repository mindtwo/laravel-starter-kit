#! usr/bin/bash

$FORGE_COMPOSER install --no-dev
npm ci || npm install
npm run build
$FORGE_PHP artisan config:clear
$FORGE_PHP artisan route:clear
$FORGE_PHP artisan view:clear
$FORGE_PHP artisan event:clear
$FORGE_PHP artisan clear-compiled
$FORGE_PHP artisan view:cache
$FORGE_PHP artisan config:cache
$FORGE_PHP artisan route:cache
$FORGE_PHP artisan icons:cache
