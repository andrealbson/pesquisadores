$(document).ready(function () {
    $('.curtir-postagem').on('click', function () {
        var idPublicacao = $(this).attr('data-id-postagem');
        var idUser = $('#id-logado').val();
        $.ajax({
            url:"/principal/curtir/",
            method:"POST",
            data:{idUser: idUser, idPublicacao: idPublicacao},
            success:function(n){
                console.log(n);
                if(n.curtir == 1 || n.curtir == '1') {
                    console.log('curtiu!');
                    Swal.fire({
                        icon: 'success',
                        title: 'Você curtiu uma publicacção',
                        showCloseButton: false,
                        showCancelButton: false,
                        focusConfirm: false,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else if(n.curtir == 0 || n.curtir == '0') {
                    console.log('DEScurtiu!');
                    Swal.fire({
                        icon: 'success',
                        title: 'Curtida Removida',
                        showCloseButton: false,
                        showCancelButton: false,
                        focusConfirm: false,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1500
                    });
                } else {
                    console.log('ERRO AO RECEBER PARAMETROS...');
                    Swal.fire({
                        icon: 'error',
                        title: 'Ops, algo deu errado...',
                        text: 'Por favor atualize a página ou contacte ao administrador',
                        showCloseButton: false,
                        showCancelButton: false,
                        focusConfirm: false,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 4500
                    });
                }
            }
        });
    });
});