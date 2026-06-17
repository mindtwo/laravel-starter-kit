<?php declare(strict_types=1);

use Chiiya\CodeStyle\CodeStyle;
use Symplify\EasyCodingStandard\Config\ECSConfig;

require __DIR__.'/vendor/autoload.php';
require __DIR__.'/bootstrap/app.php';

return ECSConfig::configure()
    ->withSets([CodeStyle::ECS])
    ->withPaths([
        app_path(),
        config_path(),
        base_path('database'),
        base_path('tests'),
        base_path('routes'),
    ]);
