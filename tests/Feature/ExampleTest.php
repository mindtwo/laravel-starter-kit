<?php declare(strict_types=1);

it('can access the home page', function (): void {
    $response = $this->get('/');

    $response->assertStatus(200);
});
