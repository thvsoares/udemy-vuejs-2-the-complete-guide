Param(
    [Parameter(Mandatory=$false)]
    [Switch]
    $Build
)

if ($Build) {
    docker build -t vue .\Docker
}

docker run --rm -it -p 80:8080 -v ${pwd}/${AppPath}:/usr/app vue bash