<?php
/**
 * Copyright © 2015 Magento. All rights reserved.
 * See COPYING.txt for license details.
 */
namespace Magento\SampleBlock\Api;

/**
 * Cart Repository interface for guest carts.
 * @api
 */
interface CallbackInterface
{
    /**
     * Enable a guest user to return information for a specified cart.
     *
     * @param string $number
     * @return string
     */
    public function send($number);
}
