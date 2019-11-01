const db = require('../config/database');
	
module.exports = {
	async create (req, res) {
		const { items, ...orderData } = req.body;
		
		try {
					
			await db.query('BEGIN');

			const customerSelectId = await db.query(`
				SELECT "id" FROM "Customers"  Where "id" = ${orderData.buyer.id}
			`);			
			if(!customerSelectId.rows[0].id){
				await db.query('ROOLBACK');
				return res.status(500).send({message: 'Cliente não cadastrado'});
			}
			const orderQueryText = `
			INSERT INTO "Orders" ("id", "customer_id", "total", "status","createdAt","updatedAt")
			VALUES (DEFAULT, $1,$2,$3,NOW(),NOW()) RETURNING id
			`;
			
			const orderQueryValues = [
				customerSelectId.rows[0].id,
				orderData.total,
				orderData.status,
				
			];
			const orderQuery = await db.query(orderQueryText,orderQueryValues);
		
				
			items.forEach(async (item) => {
				const productSelectId = await db.query(`
				SELECT "id" FROM "Products"  WHERE "id" = ${item.product.id}
				
				`);
				if(!productSelectId.rows[0].id){
					await db.query('ROOLBACK');
					return res.status(500).send({message: 'Produto não cadastrado'});
				}
				const orderItemQueryText = `
				INSERT INTO "OrderItems" ("id", "order_id", "product_id", "amount", "price_unit", "total", "createdAt", "updatedAt")
				VALUES (DEFAULT,$1,$2,$3,$4,$5,NOW(),NOW())
				`;
				const orderItemValues = [
					orderQuery.rows[0].id,
					productSelectId.rows[0].id,
					item.amount,
					item.price_unit,
					item.total

				];
				
				await db.query(orderItemQueryText,orderItemValues);
				

			});			
			
					
			await db.query('COMMIT');
			return res.status(201).send({message: `${orderQuery.rowCount} pedido cadastrado com sucesso`});

		} catch (err) {		
			console.error(err)	
			await db.query('ROLLBACk');
			return res.status(404).send(err);
		}
			

		
	}

};