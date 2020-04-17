<!DOCTYPE html>
<html lang="es">
    <head>
        <?php include 'head.php' ?>

    </head>
    <body>
        <?php include 'nav.php' ?>

        <div id="slider" class="slider-big">
            <h1>Bienvenido a Zenén Hernández - Blog de Programación</h1>
            <a href="blog.php" class="btn-white">Ir al blog</a>
        </div>

        <div class="center">
            <section id="content">
                <h2 class="subheader">Últimos artículos</h2>
                
                <script type="text/javascript">
                    window.addEventListener("load", function(){
                        var template = document.getElementById("article-template");
                        var articles = document.getElementById("articles");

                        for(var i = 1; i <= 5; i++){
                            var clonado = template.cloneNode(true);
                            clonado.removeAttribute("id");

                            var h2 = clonado.getElementsByTagName("h2")[0];
                            h2.innerHTML = h2.textContent + ' ' + i;

                            articles.appendChild(clonado);
                        }
        
                    });
                </script>

                <!--Listado articulos-->
                <div id="articles">
                    <article class="article-item" id="article-template">
                        <div class="image-wrap">
                            <img src="https://unhabitatmejor.leroymerlin.es/sites/default/files/styles/header_category/public/2018-10/4%20paisaje%20macedonia.jpg?itok=AELknmF8" alt="Paisaje" />
                        </div>
    
                        <h2>Articulo de prueba</h2>
                        <span class="date">
                            Hace 5 minutos
                        </span>
                        <a href="#">Leer más</a>

                        <div class="clearfix"></div>
                    </article>

                    <!--AÑADIR ARTICULOS VIA JS-->

                </div>
                
            </section>

            <aside id="sidebar">
                <div id="nav-blog" class="sidebar-item">
                    <h3>Puedes hacer esto</h3>
                    <a href="#" class="btn btn-success">Crear artículo</a>
                </div>

                <div id="search" class="sidebar-item">
                        <h3>Buscador</h3>
                        <p>Encuentra el artículo que buscas</p>
                        <form>
                            <input type="text" name="search" />
                            <input type="submit" name="submit" value="Buscar" class="btn" />
                        </form>
                </div>
            </aside>

            <div class="clearfix"></div>
        </div>

        
        <?php include 'footer.php' ?>        
    </body>
</html>