export const showLoading = () => {
    $(function(){
        $("#loading").removeClass("hidden")
    })
}

export const hideLoading = () => {
    $(function(){
        $("#loading").addClass("hidden")
    })
}