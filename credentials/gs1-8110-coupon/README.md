# GS1 8110 Coupon

A retail coupon is traditionally a snippet of paper clipped out of a newspaper
or promotion. Now consumers can clip Verifiable Credentials. Often digital
coupons are represented with an image that includes a thick dashed border, to
signal "cut here". To redeem, consumers might select a coupon from a retailer's
app or website and obtain a `GS18110CouponCredential` from the retailer that
can be redeemed at the point of sale. Each clipped coupon identifies a
`CouponOffer`, which carries metadata defined by the manufacturer about a
discount offer. An offer sets the value of a discount, the products to which it
applies, and the conditions under which it can be redeemed. This information is
sufficient to render a scannable
[GS1](https://www.gs1us.org/upcs-barcodes-prefixes/additional-ways-to-identify-products/coupons)
barcode that could provide a traditional paper-like presentation of the coupon
where presentation of the VC would be impractical.