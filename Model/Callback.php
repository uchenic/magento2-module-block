<?php
namespace Magento\SampleBlock\Model;
class Callback extends \Magento\Framework\Model\AbstractExtensibleModel implements
    \Magento\SampleBlock\Api\CallbackInterface
{

	public function send($number)
	{	
		mail();
		mail ('example@example.com', 'require call', printf('call to: %s',$number));
		return printf("{\"ok\":\"%s\"}",$number);
	}
}