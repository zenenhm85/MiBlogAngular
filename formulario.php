<!DOCTYPE html>
<html lang="es">
    <head>
        <?php include 'head.php' ?>
    </head>
    <body>
        <?php include 'nav.php' ?>

        <div class="center">
            <section id="content">

                   <h1 class="subheader">Formulario</h1>

                   <form class="mid-form">
                        <div class="form-group">
                            <label for="nombre">Nombre</label>
                            <input type="text" name="nombre" />
                        </div>

                        <div class="form-group">
                            <label for="apellidos">Apellidos</label>
                            <input type="text" name="apellidos" />
                        </div>

                        <div class="form-group">
                            <label for="bio">Biografia</label>
                            <textarea name="bio"></textarea>
                        </div>

                        <div class="form-group radibuttons">
                            <input type="radio" name="genero" value="hombre" /> Hombre 
                            <input type="radio" name="genero" value="mujer" /> Mujer 
                            <input type="radio" name="genero" value="otro" /> Otro
                        </div>

                        <div class="clearfix"></div>

                        <input type="submit" value="Enviar" class="btn btn-success" />

                   </form>
                
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