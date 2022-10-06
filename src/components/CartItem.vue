<template>
  <div class="cart-item">
    <img :src=" require('../assets/img/' + cart_item_data.image)" alt="img" class="img">
    <div class="cart-item__info">
        <p>{{cart_item_data.name}}</p>
        <p>{{cart_item_data.price}}</p>
        <p>{{cart_item_data.article}}</p>
    </div>
    <div class="quantity">
        <p class="qty">Qty:</p>
        <span>
            <span class="minus" @click="decrementItem">-</span>
        {{cart_item_data.quantity}}
            <span class="plus" @click="incrementItem">+</span>
        </span>
    </div>
    <button @click="deleteFromCart"> Delete</button>
  </div>
</template>

<script>




export default {
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        },
        decrementItem() {
            this.$emit('decrement')
        },
         incrementItem() {
            this.$emit('increment')
        }
    }
    
}
</script>

<style>
.cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #444;
  padding: 16px;
  margin-bottom: 16px;
}

.quantity {
    text-align: center;
}

.minus {
    margin-right: 5px;
    cursor: pointer;
}

.plus {
    margin-left: 5px;
    cursor: pointer;
}
</style>