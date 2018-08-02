<template>
 <div>
    <input v-validate="'required|email'" name="email" type="text">
    <span>{{ errors.first('email') }}</span>
 </div>
</template>

