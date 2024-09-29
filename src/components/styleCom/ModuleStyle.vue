<template>
   <div class="moduleStyle">
        <h1>moduleStyle</h1>
        <div>
            <p class="des">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos quis animi a asperiores amet nesciunt illum unde alias tenetur temporibus, minus accusamus. Nam vitae non repudiandae ab ratione facilis dolores.</p>
        </div>
        <!-- below here module here implement first way -->
         <p :class="$style['e-simple']">WIthout define module name</p>
         <p :class="$style.eUnique">WIthout define module name</p>
        <!-- below here module here implement second way -->
         <p :class="eventStyle['e-simple']">WIth define module name</p>
         <p :class="eventStyle.eUnique">WIth define module name</p>
    </div>
</template>
<!-- // # there is two type of defining module style -->
 <!-- first one is to only add attribue module  -->
<style module>
.e-simple{
    color: aquamarine;
    background-color: rgb(86, 52, 10);
}
.eUnique{
    color: cadetblue;
    background-color: chocolate;
}
</style>
 <!-- first one is to only add attribue module  -->
<style module="eventStyle">
.e-simple{
    color: rgb(3, 71, 48);
    background-color: rgb(173, 118, 51);
}
.eUnique{
    color: rgb(149, 95, 160);
    background-color: chocolate;
}

</style>