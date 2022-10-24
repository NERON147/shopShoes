<template>
 <div class="cart-wrapper">
    <router-link :to="{name: 'catalog'}">
      <div class="link_to_cart"> Back to catalog</div>
    </router-link>
    <h1 class="cart">Cart</h1>
    <p class="noone" v-if="!cart_data.length">There are no products in cart...</p>
<cartItem
v-for="(item, index) in cart_data"
:key="item.article"
:cart_item_data="item"
@deleteFromCart="deleteFromCart(index)"
@decrement="decrement(index)"
@increment="increment(index)"
/>

<div class="total">
    <p class="total_name">Total:</p>
    <p>{{cartTotalCost.toLocaleString()}} ₽</p>
</div>

 </div>


</template>

<script>
import cartItem from '@/components/CartItem'
import {mapActions} from 'vuex'

export default {
    components: {
        cartItem
    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREMENT_CART_ITEM',
            'DECREMENT_CART_ITEM'
        ]),

        increment(index) {
            this.INCREMENT_CART_ITEM(index)
        },

        decrement(index) {
            this.DECREMENT_CART_ITEM(index)
        },
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        },
        
    },
    computed: {
        cartTotalCost() {
            let result = []

            if (this.cart_data.length) {
               for (let item of this.cart_data) {
                result.push(item.price * item.quantity)
            }

            result = result.reduce(function (sum, el){
                return sum + el
            }) 

            return result  
            } else {
                return 0
            }
            
           
        }
    }

}
</script>

<style>
.cart {
    text-align: center;
}

.noone {
    text-align: center;
    font-size: 30px;
}

.total {
    position: sticky;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 24px;
    display: flex;
    justify-content: center;
    background: linear-gradient(135deg, rgba(167,214,172,1) 0%, rgba(64,217,56,1) 100%);
    color: rgb(255, 255, 255);
    font-size: 20px;
    border-radius: 50px;
    width: 300px;
    text-align: center;
    align-items: center;
    margin: 0 auto;
}

.total_name {
    margin: 16px;
}
</style>