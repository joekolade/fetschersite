#Standardsprache festlegen
config {
    linkVars = L(0-1)
    sys_language_uid = 0
    language = {$fetschersite.language}
    locale_all = {$fetschersite.language.key}
}

[PIDinRootline = 31]

    lib.quickform {
        20.select {

            pidInList = 34
            uidInList = 370
        }
    }

[global]

[PIDinRootline = 53]

    lib.quickform {
        20.select {

            pidInList = 56
            uidInList = 573
        }
    }

[global]