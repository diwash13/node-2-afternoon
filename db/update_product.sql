update product
set name = $2,
description = $3,
price = $4,
image_url = $5
where product_id = $1