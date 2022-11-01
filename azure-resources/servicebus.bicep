param location string = resourceGroup().location

var serviceBusName = 'store-bus'
var topicName = 'sales'

resource serviceBusNamespace 'Microsoft.ServiceBus/namespaces@2021-11-01' = {
  name: serviceBusName
  location: location
  sku: {
    name: 'Standard'
  }
}

resource topic 'Microsoft.ServiceBus/namespaces/topics@2021-11-01' = {
  name: topicName
  parent: serviceBusNamespace
}

resource wareHouseSub 'Microsoft.ServiceBus/namespaces/topics/subscriptions@2021-11-01' = {
  name: 'invoiceSub'
  parent: topic
}

resource invoiceSub 'Microsoft.ServiceBus/namespaces/topics/subscriptions@2021-11-01' = {
  name: 'wareHouseSub'
  parent: topic
}

// az deployment group create --resource-group StoreFront --template-file servicebus.bicep
