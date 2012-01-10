AC_INIT([rsxgl-samples],[0.1])
AC_CONFIG_SRCDIR([src/samples.am])
AC_CONFIG_AUX_DIR([config])
AC_CONFIG_MACRO_DIR([m4])
AM_INIT_AUTOMAKE([foreign])
AC_CONFIG_FILES(
	Makefile
	src/common/rsxgl_samples_config.h
	src/fluids/Makefile
	src/glassview/Makefile
)

SAMPLES_SUBDIRS="src/fluids src/glassview"

AC_SUBST([SAMPLES_SUBDIRS])

AC_PROG_CC
AC_PROG_CXX

AC_LANG([C])
AC_LANG([C++])

# Get the PS3DEV environment variable:
AC_PS3DEV
AC_PREFIX_DEFAULT([${PS3DEV}/ppu])

# Find psl1ght:
AC_PSL1GHT

# PPU tools:
AC_TOOLCHAIN([ppu],[ppu],[${PS3DEV}/ppu/bin],[${PS3DEV}/ppu/lib/pkgconfig])
AC_TOOLCHAIN_PREFIX([ppu],[${default_ppuprefix}])
AC_TOOLCHAIN_PROG_CC([ppu])
AC_TOOLCHAIN_PROG_CXX([ppu])
AC_TOOLCHAIN_PATH_TOOL([ppu],[AR],[ar])
AC_TOOLCHAIN_PATH_TOOL([ppu],[RANLIB],[ranlib])
AC_TOOLCHAIN_PATH_TOOL([ppu],[AS],[as])
AC_TOOLCHAIN_PATH_TOOL([ppu],[STRIP],[strip])

# Check PSL1GHT headers
AC_PSL1GHT_PATH_PROGS
AC_PSL1GHT_CHECK_HEADERS
AC_PATH_PROG([NV40C],[nv40c],[],[${PSL1GHT_PATH}:${PATH}])

# Check for GL3.h:
AC_TOOLCHAIN_PUSH([ppu])
CPPFLAGS="${PSL1GHT_CPPFLAGS} ${CPPFLAGS}"
AC_CHECK_HEADER([GL3/gl3.h],[],[AC_MSG_ERROR([cannot include "GL3/gl3.h"])])
AC_TOOLCHAIN_POP([ppu])

# Samples can send debugging information back to the host used to build them; set its IP here,
# or leave it unset & it won't try to phone home:
AC_ARG_VAR([RSXGL_SAMPLES_CONFIG_samples_host_ip],[IP address of host for samples to send reporting to])
AC_ARG_VAR([RSXGL_SAMPLES_CONFIG_samples_host_port],[port number on host for samples to send reporting to (default is 9000)])

if test -z "${RSXGL_SAMPLES_CONFIG_samples_host_ip}"; then
RSXGL_SAMPLES_CONFIG_samples_host_port=0
elif test -z "${RSXGL_SAMPLES_CONFIG_samples_host_port}"; then
RSXGL_SAMPLES_CONFIG_samples_host_port=9000
fi

AC_SUBST([RSXGL_SAMPLES_CONFIG_samples_host_ip])
AC_SUBST([RSXGL_SAMPLES_CONFIG_samples_host_port])

# Find lftp
AC_PATH_PROG([LFTP],[lftp])
AC_MSG_NOTICE([path to the lftp utility is ${LFTP}])

# Look for libraries normally stored under "${PS3DEV}/portlibs"
AC_ARG_VAR([ppu_portlibs_PKG_CONFIG_PATH],[pkg-config search paths for PS3 ported libraries (default is "${PS3DEV}/portlibs/ppu/lib/pkgconfig")])
ppu_portlibs_PKG_CONFIG_PATH=${ppu_portlibs_PKG_CONFIG_PATH:-"${PS3DEV}/portlibs/ppu/lib/pkgconfig"}
AC_MSG_NOTICE([pkg-config search paths for PPU ported libraries are "${ppu_portlibs_PKG_CONFIG_PATH}"])

# Look for libpng:
AC_TOOLCHAIN_EXTPKG([ppu],[libpng],[libpng],[${ppu_portlibs_PKG_CONFIG_PATH}])

# Look for zlib:
AC_TOOLCHAIN_EXTPKG([ppu],[zlib],[zlib],[${ppu_portlibs_PKG_CONFIG_PATH}])

# Look for assimp:
AC_TOOLCHAIN_EXTPKG([ppu],[assimp],[assimp],[${ppu_portlibs_PKG_CONFIG_PATH}])

# Look for glassimp:
AC_TOOLCHAIN_EXTPKG([ppu],[glassimp],[glassimp],[${ppu_portlibs_PKG_CONFIG_PATH}])

AC_OUTPUT
