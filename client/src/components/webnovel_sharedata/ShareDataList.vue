<template>
  <div class="share-data-list">
    <div
    @contextmenu.prevent="openContextMenu"
    class="list-item">
        <div class="title">title</div>
        <details class="note">
            <summary>Note</summary>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur suscipit soluta alias eum ipsam nobis, aspernatur numquam, voluptatum explicabo commodi a qui quisquam est itaque expedita magnam quia esse aliquid?</p>
        </details>
        <details class="down-link">
            <summary>Download Link</summary>
            <div class="down-list">
                <div class="down-list-item">one</div>
                <div class="down-list-item">two</div>
                <div class="down-list-item">three</div>
            </div>
        </details>
    </div>
  </div>
</template>

<script setup>



function openContextMenu(){
    console.log('context');
}
</script>

<style scoped>
    .share-data-list {
        flex: 8;
        margin-right: 10px;
    }
    .title {
        text-align: center;
        font-size: 1.3rem;
        margin-bottom: 10px;
        text-transform: capitalize;
    }
    .list-item {
        width: 100%;
        padding: 5px 8px;
        background: #f4f4f4;
        border: 1px solid #333;
        border-radius: 3px;
        margin-bottom: 5px;
        box-shadow: 3px 4px 0 rgb(187, 187, 187);
    }
    .down-list {

    }
    .down-list-item {
        border-bottom: 1px solid teal;
        width: 100%;
        padding: 4px 0;
        cursor: pointer;
        text-transform: capitalize;
    }
</style>