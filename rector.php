<?php declare(strict_types=1);

use Chiiya\CodeStyle\CodeStyle;
use Rector\Config\RectorConfig;

require __DIR__.'/vendor/autoload.php';
require __DIR__.'/bootstrap/app.php';

return RectorConfig::configure()
    ->withParallel()
    ->withPaths([
        app_path(),
        config_path(),
        base_path('database'),
        base_path('tests'),
        base_path('routes'),
    ])
    ->withImportNames()
    ->withSets([CodeStyle::RECTOR]);
