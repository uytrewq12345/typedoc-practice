/**
 * ユーザー情報を管理するクラス
 */
export class User {
  private id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getUserInfo(): string {
    return `User: ${this.name} (ID: ${this.id})`;
  }
}

/**
 * 商品情報を管理するクラス
 */
export class Product {
  private id: number;
  private name: string;
  private price: number;

  constructor(id: number, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getProductInfo(): string {
    return `Product: ${this.name} (ID: ${this.id}) - $${this.price}`;
  }
}

/**
 * 注文情報を管理するクラス
 */
export class Order {
  private id: number;
  private user: User;
  private products: Product[];

  constructor(id: number, user: User, products: Product[]) {
    this.id = id;
    this.user = user;
    this.products = products;
  }

  getOrderInfo(): string {
    const productList = this.products.map(p => p.getProductInfo()).join(', ');
    return `Order: ${this.id}\nUser: ${this.user.getUserInfo()}\nProducts: ${productList}`;
  }
}
