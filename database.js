const pgp = require('pg-promise')();
var db = pgp('postgres://quxstzwnixkzml:c424aa6bac17fee1536ed4d7a61df67a66170995a252aed36c491ecd68444427@ec2-107-20-249-48.compute-1.amazonaws.com:5432/d5tcre0n3cjia1?ssl=true');

function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function getProductByID(req, res) {
    db.any('select * from products where product_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' +
                        req.params.id
                });
        })
       .catch(function (error) {
            console.log('ERROR:', error)
        

        })
}
function insertProduct(req, res) {
    db.none('insert into products(product_id, title, price, created_at, tags)' +
        'values(${product_id}, ${title}, ${price}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function updateProduct(req, res) {
    db.none('update products set title=${title},price=${price},created_at=${created_at} where product_id=' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function deleteProduct(req, res) {
    db.none('delete FROM products where product_id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

//Purchase_item
function getPurchase_item(req, res) {
    db.any('select * from purchase_items')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Purchase_item'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function getPurchase_itemByID(req, res) {
    db.any('select * from purchase_items where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase_items id:' + req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function insertPurchase_item(req, res) {
    db.any('insert into purchase_items(id, purchase_id, product_id,price,quantity)' +
        'values(${id}, ${purchase_id}, ${product_id}, ${price}, ${quantity})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one Purchase_item'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

    
}
function updatePurchase_item(req, res) {
    db.any('update purchase_items set purchase_id=${purchase_id},product_id=${product_id},price=${price},quantity=${quantity} where id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Update Purchase_item id=' + req.params.id
            });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function DeletePurchase_item(req, res) {
    db.any('delete from purchase_items where id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete id=' + req.params.id
                })
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
        
}

//Purchase
function getPurchase(req, res) {
    db.any('select * from purchases')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL Purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function getPurchaseByID(req, res) {
    db.any('select * from purchases where purchase_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase id:' + req.params.id
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function insertPurchase(req, res) {
    db.any('insert into purchases(purchase_id,created_at,name,address,state,zipcode,user_id)' +
        'values(${purchase_id}, ${created_at}, ${name}, ${address}, ${status}, ${state},${zipcode},${user_id})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one Purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

}
function updatePurchase(req, res) {
    db.any('update purchases set created_at=${created_at},name=${name},address=${address},state=${state},zipcode=${zipcode},user_id=${user_id} where purchase_id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'Update Purchase id=' + req.params.id
            });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function DeletePurchase(req, res) {
    db.any('delete from purchases where purchase_id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete id=' + req.params.id
                })
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}



//user
function getUser(req, res) {
    db.any('select * from users')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL User'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function getUserByID(req, res) {
    db.any('select * from users where user_id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase_items id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({ status: "fail", message: "Mission Fail get back" })
            console.log('ERROR:', error)
        })
}
function insertUser(req, res) {
    db.any('insert into users(user_id,email,password,details,created_at)' +
        'values(${user_id}, ${email}, ${password}, ${details}, ${created_at}',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchase'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })

    
}
function DeleteUser(req, res) {
    db.any('delete from users where user_id=' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete id=' + req.params.id
                })
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
  
}
function updateUser(req, res) {
    db.any('update users set email=${email},password=${password},details=${details},created_at=${created_at} where user_id =' + req.params.id,
        req.body)
        .then(function (data) {
            res.status(200).json({
                status: 'success',
                data: data,
                message: 'update purchase id=' + req.params.id
            });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}


module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProduct,
    getPurchase_item,
    getPurchase_itemByID,
    insertPurchase_item,
    updatePurchase_item,
    DeletePurchase_item,
    getPurchase,
    insertPurchase,
    updatePurchase,
    DeletePurchase,
    getPurchaseByID,
    getUser,
    getUserByID,
    insertUser,
    DeleteUser,
    updateUser
}