<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <div class="container">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Crud </a>
                </div>
            </nav>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div id="success" style="transition: 0.3s; overflow:hidden;" class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>form!</strong> Submit.
            </div>
            <div class="col">
                <form id="form">
                    <div class="mb-3">
                        <label class="form-label">Enter Name</label>
                        <input type="text" class="form-control" id="name">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" id="pass">
                    </div>
                    <button type="submit" id="submit" class="btn UU btn-primary">Submit</button>
                </form>
            </div>
            <div class="col" id="table">
                <table class="table border" style="text-align:center; text-transform:capitalize">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">password</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody id="tbody">
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <!-- JavaScript -->
    <script src="script.js"></script>

</body>

</html>