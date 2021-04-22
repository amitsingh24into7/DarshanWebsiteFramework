import { PaypalSubscriptionDirective } from './paypal-subscription.directive';
let elRefMock = {
  nativeElement: document.createElement('div')
};

// let serviceMock = {
//   setTitle: (title: string) => null
// };

describe('PaypalSubscriptionDirective', () => {
  it('should create an instance', () => {
    const directive = new PaypalSubscriptionDirective(elRefMock);
    expect(directive).toBeTruthy();
  });  
});
