<script setup>
import { inject } from 'vue';
const name = inject('name');
const graduateYear = inject('graduateYear')
const isSwimmer = inject('isSwimmer')
const friends = inject('friends')
const firstLove = inject('firstLove')
const favouriteWebseries = inject('favouriteWebseries')
</script>
<template>
    <h1>SubChild Inject Data</h1>
    <p v-show="isSwimmer">{{ name }} is a pro swimmer. He learned swimming in his village.There is seasonal river come after main river overflow.</p>
    <p>This is the benifit of provide and inject method. Otherwise you must pass the data to each child to get data in last or second last component.</p>
    <hr/>
    <br/>
    <h1>We collect all provide information here</h1>
    <br/>
    <hr/>
    <h1>1. String</h1>
    <p>Name : {{ name }}</p>
    <hr/><hr/><br/>
    <h1>2. Number</h1>
    <p>graduateYear : {{  graduateYear }}</p>
    <hr/><hr/><br/>
    <h1>3. Boolean</h1>
    <p>Know Swimming : {{ isSwimmer }}</p>
    <hr/><hr/><br/>
    <h1>4. Array</h1>
    <p>Friends : {{ friends }}</p>
    <ul v-for="(friend,index) in friends":key="index">
        <li> {{index +'. '+ friend }}</li>
    </ul>
    <hr/><hr/><br/>
    <h1>5. Object</h1>
    <p>{{ firstLove }}</p>
    <p>My first Love is {{ firstLove.name }}.We {{firstLove.met}}. <span v-if="firstLove.stillLove">and I still miss her.</span></p>
    <hr/><hr/><br/>
    <h1>6. Array Object</h1>
    <p>{{ favouriteWebseries }}</p>
    <ul v-for="({title,watchingYear,completed,ongoing},index) in favouriteWebseries" :key="index">
        <hr/><hr/>
        <li>title : {{ title }}</li>
        <li>watchingYear :{{ watchingYear }}</li>
        <li>completed : {{ completed }}</li>
        <li>ongoing :{{ ongoing }}</li>
        <hr/><hr/><br/>
    </ul>
</template>