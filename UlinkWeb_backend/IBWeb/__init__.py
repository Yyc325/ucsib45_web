try:
    import pymysql
except ModuleNotFoundError:
    # mysqlclient already provides MySQLdb, so PyMySQL is only needed as a fallback.
    pymysql = None

if pymysql is not None:
    pymysql.install_as_MySQLdb()
