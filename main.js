$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#btn-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
        e.preventDefault()
        
        const urlImg = $('#inptUrl').val()
        const novoItem = $('<li style="display: none"></li>')
        $(`<img src="${urlImg}">`).appendTo(novoItem)
        $(`
            <div class="overlay-imagem">
                <a href="${urlImg}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>`
        ).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn(1000)
        $('#inptUrl').val('')
    })
})